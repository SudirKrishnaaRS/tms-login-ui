import React from "react";

import "./UserTable.css";



const TableRecord=({userId="***",firstName="*******",lastName="*******",userName="*******"})=>(

        <tbody>

                                <tr>

                                    <td>{userId}</td>

                                    <td>{firstName}</td>

                                    <td>{lastName}</td>

                                    <td>{userName}</td>

                                    {/* <td>{password}</td> */}

                                    <td>

                                        <ul className="action-list">

                                            <li><a href="/#" data-tip="view"><i className="fa fa-eye"></i></a></li>

                                            <li><a href="/#" data-tip="delete"><i className="fa fa-trash"></i></a></li>

                                        </ul>

                                    </td>

                                </tr>

            </tbody>

)



export default TableRecord;