import { Stack } from "@mui/system";
import React from "react";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCate, setSelectedCate,fontcolor }) => {
  return (
    <Stack
      sx={{
        overflowY:"auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { xs: "row", md: "column" },
      }}
    >
      {categories.map((categorie) => (
        <button
          className="category-btn"
          style={{ background: categorie.name === selectedCate && "#FC1503",color:fontcolor }}
          onClick={() => {
            setSelectedCate(categorie.name);
          }}
          key={categorie.name}
        >
          <span
            style={{
              marginRight: "10px",
              opacity: categorie.name === selectedCate ? 1 : 0.8,
            }}
          >
            {categorie.icon}
          </span>
          <span style={{ opacity: categorie.name === selectedCate ? 1 : 0.8 }}>
            {categorie.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
