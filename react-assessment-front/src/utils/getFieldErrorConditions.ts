/**
 * condition = true means there is an error
 */
export default function getFieldErrorConditions(field: string) {
  const result = {
    condition: (() => false) as (fieldData: string) => boolean,
    message: "",
  };
  switch (field) {
    case "name":
      result.condition = (fieldData: string) => {
        return !!fieldData.match(/\d+/g);
      };
      result.message = "Name field does not allow number";
      break;

    case "email":
      result.condition = (fieldData: string) => !fieldData.includes("@");
      result.message = "Email field must include the @ sign";
      break;

    case "phone":
      result.condition = (fieldData) => fieldData[0] === "-";
      result.message = "Phone numbers cannot be negative";
      break;
  }

  return { condition: result.condition, message: result.message };
}
