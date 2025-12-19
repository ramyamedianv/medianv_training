//enum are used to define fixed set of values


enum Status{
    Pending,
    Approved,
    Rejected
}

let orderStatus:Status=Status.Pending;

enum Role{
    ADMIN='admin',
    USER='user',
    GUEST='guest'
}

function check(role:Role){
    if(role===Role.ADMIN){
        console.log('Full Access');
    }
}
export{};