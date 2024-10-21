import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch,RootState } from ".";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
