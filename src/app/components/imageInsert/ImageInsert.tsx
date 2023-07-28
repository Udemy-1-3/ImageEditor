import React, { useState } from 'react';
import styled from 'styled-components';

const ImageInsertContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 200px;
  margin-bottom: 10px;
`;

const ImageInput = styled.input`
  margin-bottom: 10px;
`;

interface ImageInsertProps {
  onImageChange: (imageData: string) => void;
}

const ImageInsert: React.FC<ImageInsertProps> = ({ onImageChange }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        onImageChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ImageInsertContainer>
      {imagePreview && <ImagePreview src={imagePreview} alt="Preview" />}
      <label htmlFor="imageInput">이미지 선택</label>
      <ImageInput type="file" id="imageInput" onChange={handleFileChange} />
    </ImageInsertContainer>
  );
};

export default ImageInsert;
