//enum are used to define fixed set of values
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Approved"] = 1] = "Approved";
    Status[Status["Rejected"] = 2] = "Rejected";
})(Status || (Status = {}));
var orderStatus = Status.Pending;
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
    Role["GUEST"] = "guest";
})(Role || (Role = {}));
function check(role) {
    if (role === Role.ADMIN) {
        console.log('Full Access');
    }
}
