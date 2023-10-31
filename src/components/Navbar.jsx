import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../language/i18next/i18next";

const Navbar = () => {
  const [lng, setLng] = useState("ru");

  useEffect(() => {
    const lngLc = localStorage.getItem("language");
    if (lngLc == null) {
      localStorage.setItem("language", lng);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", lng);
    const lngLc = localStorage.getItem("language");
    i18n.changeLanguage(lngLc);
  }, [lng]);

  const { t } = useTranslation();

  return (
    <div>
      <ul>
        <h2>Navbar</h2>
        <li>{t("navbar.about")}</li>
        <li>{t("navbar.production")}</li>
        <li>{t("navbar.products")}</li>
        <li>{t("navbar.cart")}</li>
        <li>{t("navbar.user")}</li>
        <select
          defaultValue="ru"
          onChange={e => setLng(e.target.value)}
          name="lng"
          id="lng">
          <option value="en">Eng</option>
          <option value="ru">Russ</option>
        </select>
      </ul>
    </div>
  );
};

export default Navbar;
