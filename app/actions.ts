'use server'

import { prisma } from '@/lib/db/prisma'

export async function joinWaitlist(_prev: unknown, formData: FormData) {
  const email = (formData.get('email') as string)?.trim().toLowerCase()
  const company = (formData.get('company') as string)?.trim() || null
  const role = (formData.get('role') as string) || null
  const inviteCode = (formData.get('inviteCode') as string)?.trim() || null

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Please enter a valid email address.' }
  }

  // Validate invite code if provided
  if (inviteCode) {
    const code = await prisma.inviteCode.findUnique({
      where: { code: inviteCode },
    })
    if (!code) {
      return { error: 'Invalid invite code.' }
    }
    if (code.expiresAt && code.expiresAt < new Date()) {
      return { error: 'This invite code has expired.' }
    }
    if (code.usedCount >= code.maxUses) {
      return { error: 'This invite code has reached its limit.' }
    }
    await prisma.inviteCode.update({
      where: { code: inviteCode },
      data: { usedCount: { increment: 1 } },
    })
  }

  try {
    await prisma.waitlistEntry.create({
      data: {
        email,
        company,
        role,
        inviteCode,
        source: inviteCode ? 'invite' : 'organic',
      },
    })
    return { success: true, hasInvite: !!inviteCode }
  } catch (e: unknown) {
    if (typeof e === 'object' && e !== null && 'code' in e && (e as { code: string }).code === 'P2002') {
      return { error: "You're already on the waitlist!" }
    }
    return { error: 'Something went wrong. Please try again.' }
  }
}
