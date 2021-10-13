import { useForm } from "../../../shared/hooks";

import InputField from "../../../shared/components/InputField";

import { initialState } from "./initialState";
import { fields } from "./fields";

const PostSearchForm = ({onSubmit})=> {
   const [data, handleChange, handleSubmit] = useForm(initialState, onSubmit)

    return (
        <form action="" onSubmit={handleSubmit}>
            <InputField onChange={handleChange}
                    {...fields.searchText}
                    value={data.searchText} />
        </form>
    )
};

export default PostSearchForm;