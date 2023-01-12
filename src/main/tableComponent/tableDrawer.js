import React from "react";
import {Button, Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {selectCoordinates} from "../store/coordinates";
import '../../styles/tableDrawer.sass'

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

    const coordinatesForTable = useSelector(selectCoordinates)
    const dispatch = useDispatch()

    let selectedRowKeys;

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        type: "radio"
    }

    function onSelectChange(selectedRowKeys){

        let valuesForTheKey

        dispatch({type: 'USER_CLICKED_ON_A_ROW', value: selectedRowKeys})
    }

    return (
        <div>
            <Table rowSelection={rowSelection} dataSource={coordinatesForTable} columns={columns}></Table>
            <Button className={'centerButton'} type={"primary"} onClick={() => dispatch({type: 'USER_ADD_COORDINATES'})}>Добавить координаты</Button>
        </div>
    )
}
