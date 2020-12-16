import React, { useEffect, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { styled } from 'baseui';
import {getURl} from '../../utils.js'

import { Trash,Time, UploadIcon } from '../AllSvgIcon';
import Button from '../../components/Button/Button';

const Text = styled('span', ({ $theme }) => ({
  ...$theme.typography.font14,
  fontFamily: $theme.typography.primaryFontFamily,
  color: $theme.colors.textDark,
  marginTop: '15px',
  textAlign: 'center',
}));

const TextHighlighted = styled('span', ({ $theme }) => ({
  color: $theme.colors.primary,
  fontWeight: 'bold',
}));

const Container = styled('div', ({ props }) => ({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px',
  borderWidth: '2px',
  borderRadius: '2px',
  borderColor: '#E6E6E6',
  borderStyle: 'dashed',
  backgroundColor: '#ffffff',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border 0.24s ease-in-out',
  cursor: 'pointer',
}));

const ThumbsContainer = styled('aside', () => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: '16px',
}));

const Thumb = styled('div', ({ $theme }) => ({
  ...$theme.borders.borderEA,
  display: 'inline-flex',
  borderRadius: '2px',
  marginBottom: '8px',
  marginRight: '8px',
  width: '100px',
  height: '100px',
  padding: '4px',
  boxSizing: 'border-box',
}));

const thumbInner = {
  display: 'flex',
  minWidth: '100%',
  // overflow: 'hidden',
  borderRadius:"25px",
  Padding:"2px solid red"
};

const img = {
  display: 'flex',
  width: '100%',
  height: '100%',
};

const x = {
  "position":"relative","background":"white","color":"black","height":"10px"
}





// let blob= new Blob()

function Uploader({ onChange, imageURL,required,multi }: any) {

 
  const [files, setFiles] = useState(
    imageURL ? imageURL: []
  );

  const  removePic = (id)=>{
   let newfiles =  files.filter(item=>item.id!==id)
    setFiles(newfiles)
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: multi?multi:false,
    onDrop: useCallback(
      acceptedFiles => {
        setFiles((state)=>[...state,
          ...acceptedFiles.map(file =>
            Object.assign(file, {
             image: URL.createObjectURL(file),
            })
          )]
        );
        onChange(acceptedFiles)
      },
      [onChange]
    ),
  });

  const thumbs = files.map(file => (
    
    <Thumb key={file.id}>
        {console.log("uploaderImage",file.image)}
      <div style={thumbInner} id="container" className="img-div">

      {/* {file instanceof File } */}
        <img src={!(file instanceof File)?getURl(file.image):URL.createObjectURL(file)} style={img}  alt={file.id} />
        <Button type="button" onClick={()=>removePic(file.id)} startEnhancer={() => <Time />}  className="del-pic">
        </Button>
      </div>
    </Thumb>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.image));
    },
    [files]
  );

  return (
    <section className="container uploader">
      <Container {...getRootProps()}>
        <input {...getInputProps()} required={required?required:""}/>
        <UploadIcon />
        <Text>
          <TextHighlighted>Drag/Upload</TextHighlighted> your image here.
        </Text>
      </Container>
      {thumbs && <ThumbsContainer>{thumbs}</ThumbsContainer>}
    </section>
  );
}

export default Uploader;
