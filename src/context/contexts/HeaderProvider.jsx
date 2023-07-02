import PropTypes from "prop-types"
import headerContext from "../providers/headerContext";
import { useMemo, useState } from "react";

function HeaderProvider({ children }) {
  const [pageUrl, setPageUrl] = useState('/');
  const [points, setPoints] = useState(0);

  const value = useMemo(
    () => ({ pageUrl, setPageUrl, points, setPoints }),
    [pageUrl, setPageUrl, points, setPoints],
  );

  return (
    <headerContext.Provider value={value}>
      { children }
    </headerContext.Provider>
  )
}

HeaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderProvider;
