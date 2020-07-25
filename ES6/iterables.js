const permissionMap = new Map();

permissionMap.set("Admin", {read:true, write:true, del:true});
permissionMap.set("student", {read:true, write:false, del:false});
permissionMap.set("staff", {read:true, Write:false, del:false});

permission = permissionMap[Symbol.iterator]();
 console.log(permission.next());
 console.log(permission.next());
 console.log(permission.next());
 console.log(permission.next());