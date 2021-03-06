import axios from 'axios';

const uploadPic = async (media) => {
  try {
    const form = new FormData();
    form.append('file', media);
    form.append('upload_preset', 'chat-app');
    form.append('cloud_name', 'diyvyrpqt');

    const res = await axios.post(process.env.CLOUDINARY_URL, form);
    return res.data.secure_url;
  } catch (error) {
    return;
  }
};

export default uploadPic;
