
function UserInputForm() {
    
  return (
    <form>
        <label>First name</label>
        <input type="text" id="firstname" placeholder="Please input first name"/>
        <label>Last name</label>
        <input type="text" id="lastname" placeholder="Please input last name"/>
        <label>Phone number</label>
        <input type="text" id="phone" placeholder="Please input phone number"/>
        <label>Email</label>
        <input type="text" id="email" placeholder="Please input email"/>
        <button >Submit</button>
    </form>




  );
}

export default UserInputForm;
