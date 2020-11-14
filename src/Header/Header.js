import React from "react";

const styles = {
  h: {
    textDecoration: "underline",
    textDecorationColor: "#60F8",
    textDecorationStyle: "dashed",
    marginLeft: "10rem"
  },
  header: {
    background: 'linear-gradient(to left, #3f87a6, #ebf8e1, #f69d3c)',
    borderBottom: '3px solid #999',
    margin: '0 auto',
    padding: '0'
  }
};

function Header() {
  return (
    <div style={styles.header}>
    <h1 style={styles.h}>Cal endar</h1>
    </div>
  );
}

export default Header;
