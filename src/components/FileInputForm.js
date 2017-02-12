import React from 'react';
import FileInput from 'react-file-input'

const FileInputForm = ({
  name,
  accept,
  placeholder,
  className,
  onChange
}) => (<form>
  <FileInput name={name}
             accept={accept}
             placeholder={placeholder}
             className={className}
             onChange={onChange}/>
</form>);

export default FileInputForm;