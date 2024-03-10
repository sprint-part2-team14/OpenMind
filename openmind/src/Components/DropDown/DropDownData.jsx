const DropDownData = ({ data }) => {
  const make = () => {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      const { id, name, imageSource, createdAt, questionCount } = data[i];
      result.push(
        <div key={id}>
          <p>{id}</p>
          <p>{name}</p>
          <img src={imageSource} alt='프로필이미지' />
          <p>{createdAt}</p>
          <p>{questionCount}</p>
        </div>
      );
    }
    return result;
  };

  return (
    <>
      <div>{make()}</div>
    </>
  );
};

export default DropDownData;
