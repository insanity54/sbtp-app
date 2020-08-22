import PropTypes from "prop-types"
import React from "react"
// import GiftImage from "./GiftImage"

export const Prize = ({ status, media }) => (
    <div>
      <h1 style={{ margin: 0 }}>
        Prize {status}
      </h1>
      <ul>
        {media.map(m => (
          <li>{m}</li>
        ))}
      </ul>
    </div>
)

Prize.propTypes = {
  // title: PropTypes.string,
  // description: PropTypes.string,
  media: PropTypes.array,
  status: PropTypes.oneOf(['locked', 'unlocked', 'open']),
}

Prize.defaultProps = {
  status: `locked`,
  media: []
  // title: `default title`,
  // description: `default description`
}
