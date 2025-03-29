import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../store/slices/languageSlice';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

const useLanguage = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { language } = useSelector((state) => state.language);
  const changeLanguage = (newLanguage) => {
    dispatch(setLanguage(newLanguage));
    queryClient.invalidateQueries();
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return { language, changeLanguage };
};

export default useLanguage;
