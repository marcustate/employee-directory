import React, { Component } from  "react";
import Form from "./Form";
import Card from "./Card";
import API from "../utils/api"
import "";

const MaxResults = 30;

class Container extends Component{
    state = 
    {
        result: [],
        filter: "",
        filterBy: "lastName",
        currentSort: "default",
        sort: ""
    },

    componentWillMount() 
    {
        API.search()
            .then(res => {
                console.log(res)
                this.setState({ 
                    result: res.data.results.map((e,i) ({
                        firstName: e.name.first,
                        lastName: e.name.last,
                        email: e.email,
                        phone: e.phone,
                        dob: e.age,
                        key: i
                    }))
                })
            })
            .catch(er => console.log(err));
    }
    filterEmployees = (search) => {
        console.log(searchkey);
        var 
    }
}