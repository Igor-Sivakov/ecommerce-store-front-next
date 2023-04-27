import { useAppSelector } from "./useTypedDispatch&Selector"
import { RootState } from "../types/common.types"

export const useAuth = () => useAppSelector((state: RootState) => state.auth)