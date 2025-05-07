import {ToDoProps} from "./ToDoProps";
import css from './ToDo.module.css';
import {JSX, useEffect, useState} from "react";
import {getRandomDouble} from "../../../utility/getRandomDouble";
import {Table, TableColumn} from "@consta/table/Table";
import {TaskActivity} from "./TaskActivity";
import {TaskItem} from "./TaskItem";
import {TaskTableRow} from "./TaskTableRow";

const getTestActivity = () : TaskActivity[] => {
    const countDay = 7
    const maxDate = new Date(Date.now())

    const testData: TaskActivity[] = [];
    for (let i = 0; i < countDay; i++) {
        const newDate = maxDate
        newDate.setDate(newDate.getDate() - i);
        testData.push({
            date: newDate,
            hour: getRandomDouble(0, 100, 2)
        })
    }
    return testData;
}

const getTestTask = (count: number) => {
    const localTask : TaskItem[] = [];
    for (let i = 0; i < count; i++) {
        localTask.push({
            detail: {
                id: i,
                priority: getRandomDouble(0, 5, 0),
                project: 'test',
                tag: 't',
                name: `Тестовая задача ${i}`,
            },
            activity: getTestActivity()
        })
    }
    return localTask;
}

const defaultColumns: TableColumn<TaskTableRow>[] = [
    {
        title: 'Id',
        accessor: 'id',
    },
    {
        title: 'Priority',
        accessor: 'priority',
    },
    {
        title: 'Project',
        accessor: 'project',
    },
    {
        title: 'Tag',
        accessor: 'tag',
    },
    {
        title: 'Name',
        accessor: 'name',
    },
];

export const ToDoComponent = (props: ToDoProps) : JSX.Element => {
    const [taskItems, setTaskItems] = useState<TaskItem[]>(getTestTask(50));
    const [rows, setRows] = useState<TaskTableRow[]>([]);
    const [columns, setColumns] = useState<TableColumn<TaskTableRow>[]>(defaultColumns);

    useEffect(() => {
        // todo: Надо сформировать общий список дат на основе полученных данных и только потом для него делать преобразование в модель

        const localRows = taskItems
            .map(taskItem => ({
                ...taskItem.detail,
                ...taskItem.activity.reduce((acc, item): { [key: string]: any } => {
                    acc[item.date.toDateString()] = item.hour;
                    return acc;
                }, {} as { [key: string]: any }),
            }));

        const localColumns: TableColumn<TaskTableRow>[] = [
            ...defaultColumns,
            ...(taskItems[0].activity
                .map(activityItem => ({
                    title: activityItem.date.toDateString(),
                    accessor: activityItem.date.toDateString()
                })))
        ];


        setRows(localRows);
        setColumns(localColumns);
    }, [taskItems]);

    return <div className={css.body}>
        <div className={css.tbl}>
            {rows.length < 0
            ? <></>
            : <Table columns={columns}
                     rows={rows}
                     stickyHeader
                     rowHoverEffect={true}
                     resizable={'outside'}
                     style={{
                         maxHeight: 'calc(90vh - 2rem)', // todo: Надо будет как-то иначе ограничивать размер таблицы (для того чтобы скролл работал)
                         maxWidth: 'calc(85vw)',
                     }}
                />}
        </div>
    </div>
}