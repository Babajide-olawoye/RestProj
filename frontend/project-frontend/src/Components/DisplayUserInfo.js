
function DisplayUserInfo() {

    const firstnames = ["Babz", "King", "Mario"]
    const lastnames = ["TheGoat", "Kong", "Kart"]
    const emails = ["BabzTheGoat@gmail.com", "kingkong@gmail.com", "MarioKart@gmail.com"]
    const phoneNumber = ["000000333", "3333399999", "93993939", "9499494"]
    let i = 0;

    const totalData = [firstnames, lastnames, emails, phoneNumber, i]
    return (
        <div>
            {totalData.map(({ firstname, lastname, email, phoneNumber, i }) => {
                i = i + 1;
                return <div>
                    {i}

                </div>;

            })}

        </div>

    );
}

export default DisplayUserInfo;
