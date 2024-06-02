
function IconItems({ iconUrls,iconTitle }) {
  return (
    <div className="icon-items">
        <p>{iconTitle}</p>
      <div className="icon-items-wrapper">
        {iconUrls.map((iconUrl, index) => (
          <div className="icon" key={index}>
            <img src={iconUrl} alt="icône technos" loading="lazy"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconItems;
