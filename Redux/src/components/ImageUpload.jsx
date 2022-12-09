import React, { useEffect, useState } from "react";
export default function ImageUpload() {
  const [avatar, setAvatar] = useState();
  const handleOnChangeImage = (e) => {
    const file = e.target.files[0];
    //Create image preview url
    file.preview = URL.createObjectURL(file);
    setAvatar(prev => (
        {
            ...prev,
            cn : "vf"
        })
    )
    setAvatar(file);
  };
  useEffect(() => {
    return () => {
       //Cleanup memory image
       console.log("clean");
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  
  return (
    <div>
        {console.log("render ")}
      <input type="file" onChange={handleOnChangeImage} />
      {avatar ? <img src={avatar.preview} alt="imageUpload" /> : null}
    </div>
  );
}
