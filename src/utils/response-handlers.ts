enum Status {
  success = "ok",
  error = "error",
}

export type StatusObject = { status: string }
export const getSuccessStatus = (): StatusObject => ({
  status: Status.success,
})

export const getErrorStatus = (): StatusObject => ({
  status: Status.error,
})
