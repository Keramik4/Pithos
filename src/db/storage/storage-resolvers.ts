import { getStorageRepo } from "../db-connect"
import { ResponseStatus } from "../../enums"

export const getAllStorages = async () => {
  try {
    const list = await getStorageRepo().find()
    return list
  } catch (err) {
    console.log("getAllStorages ERROR:", err)
    return []
  }
}

export const addStorage = async ({ name }: { name: string }) => {
  try {
    const repo = await getStorageRepo()
    const newStorage = repo.create({ name })
    const insertResult = await repo.save(newStorage)

    return insertResult
  } catch (err) {
    console.log("addStorage ERROR:", err)
    return []
  }
}

export const deleteStorage = async ({ id }: { id: number }) => {
  if (!id) return ResponseStatus.failure

  try {
    await getStorageRepo().delete({
      id,
    })

    return ResponseStatus.success
  } catch (err) {
    console.log("deleteStorage ERROR:", err)
    return null
  }
}

type UpdateProp = {
  id: number
  name: string
}
export const updateStorageName = async ({ id, name }: UpdateProp) => {
  if (!id || !name) return null
  try {
    const repo = getStorageRepo()
    const pickedStorage = await repo.findOneBy({ id })

    if (!pickedStorage) throw new Error("Storage with that id doesn't exist")

    pickedStorage.name = name
    const updateResult = await repo.save(pickedStorage)

    return updateResult
  } catch (err) {
    console.log(`updateProduct for id = ${id}ERROR:`, err)
    return null
  }
}

//updateStorage
//getAllEmptyStorages()
//getSotragesByProuduct(id)
//getStorageExpiredBy(date)
