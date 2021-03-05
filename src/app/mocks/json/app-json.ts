function childs3(){
    return [{
        "id": 10,
        "name": "Category Lv3",
    },{
        "id": 11,
        "name": "Category Lv3",
    },{
        "id": 12,
        "name": "Category Lv3",
    },{
        "id": 13,
        "name": "Category Lv3",
    },{
        "id": 14,
        "name": "Category Lv3",
    },{
        "id": 15,
        "name": "Category Lv3",
    },{
        "id": 16,
        "name": "Category Lv3",
    },{
        "id": 17,
        "name": "Category Lv3",
    },{
        "id": 18,
        "name": "Category Lv3",
    },{
        "id": 19,
        "name": "Category Lv3",
    }]
}
function childs2(){
    return [{
        "id": 10,
        "name": "Category Lv2",
        "childs": childs3()
    },{
        "id": 11,
        "name": "Category Lv2",
        "childs": childs3()
    },{
        "id": 12,
        "name": "Category Lv2",
        "childs": childs3()
    },{
        "id": 13,
        "name": "Category Lv2",
        "childs": childs3()
    },{
        "id": 14,
        "name": "Category Lv2",
        "childs": childs3()
    },{
        "id": 15,
        "name": "Category Lv2",
    },{
        "id": 16,
        "name": "Category Lv2",
    },{
        "id": 17,
        "name": "Category Lv2",
    },{
        "id": 18,
        "name": "Category Lv2",
    },{
        "id": 19,
        "name": "Category Lv2",
    }]
}
function childs(){
    return [{
        "id": 10,
        "name": "Category Lv1",
        "childs": childs2()
    },{
        "id": 11,
        "name": "Category Lv1",
        "childs": childs2()
    },{
        "id": 12,
        "name": "Category Lv1",
        "childs": childs2()
    },{
        "id": 13,
        "name": "Category Lv1",
        "childs": childs2()
    },{
        "id": 14,
        "name": "Category Lv1",
        "childs": childs2()
    },{
        "id": 15,
        "name": "Category Lv1",
        "childs": childs2()
    },{
        "id": 16,
        "name": "Category Lv1",
        "childs": childs2()
    },{
        "id": 17,
        "name": "Category Lv1",
        "childs": childs2()
    },{
        "id": 18,
        "name": "Category Lv1",
        "childs": childs2()
    },{
        "id": 19,
        "name": "Category Lv1",
        "childs": childs2()
    }]
}
export const appJson = {
    "status": "ok",
    "message": "success",
    "data": {
        "categories": [{
            "id": 1,
            "name": "Category 1",
            "childs": childs()
        },{
            "id": 1,
            "name": "Category 2",
            "childs": childs()
        },{
            "id": 1,
            "name": "Category 3",
            "childs": childs()
        },{
            "id": 1,
            "name": "Category 4",
            "childs": childs()
        },{
            "id": 1,
            "name": "Category 5",
            "childs": childs()
        }]
    }
}