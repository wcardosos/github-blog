export function calculateDaysFromPostCreation(postCreatedAt: Date) {
  const ONE_DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24
  const currentDate = new Date()
  const millisecondsDifference = currentDate.getTime() - postCreatedAt.getTime()

  return Math.floor(millisecondsDifference / ONE_DAY_IN_MILLISECONDS)
}
