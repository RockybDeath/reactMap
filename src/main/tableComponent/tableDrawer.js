import React from "react";
import {Button, Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getCoordinates} from "../reducers/coordinates";
import '../../styles/tableDrawer.sass'
import {sagaActions} from "../saga/sagaActions";

const columns = [
    {
        title: 'Номер заявки',
        dataIndex: 'number',
        key: 'number'
    },
    {
        title: 'Координаты ОТ lat',
        dataIndex: 'coordinateBegXLat',
        key: 'coordinateBegXLat'
    },
    {
        title: 'Координаты ОТ Lng',
        dataIndex: 'coordinateBegYLng',
        key: 'coordinateBegYLng'
    },
    {
        title: 'Координаты ДО lat',
        dataIndex: 'coordinateEndXLat',
        key: 'coordinateEndXLat'
    },
    {
        title: 'Координаты ДО Lng',
        dataIndex: 'coordinateEndYLng',
        key: 'coordinateEndYLng'
    }
]

export function TableDrawer(){

    const coordinatesForTable = useSelector(getCoordinates)
    const dispatch = useDispatch()

    let selectedRowKeys;

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        type: "radio"
    }

    function onSelectChange(selectedRowKeys){

        let coordinates = coordinatesForTable.filter(e => e.key === selectedRowKeys[0])[0]

        dispatch({type: sagaActions.USER_CLICKED_ON_A_ROW, value: coordinates})
    }

    return (
        <div>
            <Table rowSelection={rowSelection} dataSource={coordinatesForTable} columns={columns}></Table>
            <Button className={'centerButton'} type={"primary"} onClick={() => dispatch({type: sagaActions.USER_ADD_COORDINATES})}>Добавить координаты</Button>
        </div>
    )
}
