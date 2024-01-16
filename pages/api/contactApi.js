import axios from "axios";
import { siteid } from "../../utils/static";
 
export const contactApi = async (setContForm, contForm) => {
  try {
    const body = {
      siteid: siteid,
      firstname: contForm.firstname,
      lastname: contForm.lastname,
      email: contForm.email,
      phone: contForm.phone,
      comment: contForm.comment,
    };
    const resp = await axios.post(
      `https://ind.travomint.com/api/addContactDetails?api_token=0uuZqgE8RXJ2bbkmA1BZSUc02nQzFcsjViLT1ZA9mUwtaokQVZtSqu4UxBAe`,
      body
    );
    if (resp.status === 200) {
      setContForm({
        ...contForm,
        respMessage: resp.data,
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        comment: "",
      });
    }
  } catch (error) {
    setContForm({
      ...contForm,
      error: error.message,
      respMessage: "",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      comment: "",
    });
    console.log("error", error.message);
  }
}
