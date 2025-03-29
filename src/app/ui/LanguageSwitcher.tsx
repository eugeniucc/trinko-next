import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>{t("greeting")}</button>
      <button onClick={() => changeLanguage("ru")}>{t("greeting")}</button>
    </div>
  );
};

export default LanguageSwitcher;
