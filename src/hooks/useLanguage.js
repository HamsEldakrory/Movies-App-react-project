import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../store/slices/languageSlice';
const useLanguage = () => {
  const dispatch = useDispatch();
  const { language, direction } = useSelector((state) => state.language);
  const changeLanguage = (newLanguage) => {
    dispatch(setLanguage(newLanguage));
  };
  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]); 
  return { language, direction, changeLanguage };
};

export default useLanguage;
