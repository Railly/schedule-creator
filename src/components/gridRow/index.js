import React from 'react'
import styled from 'styled-components'
import Item from '../item'

const GridItem = styled.div`
  background-color: aliceblue;
`

const GridRow = ({ startTime, endTime, data }) => {
  const transformJson = data => {
    const newArr = data.map(obj => {
      let start = 0,
        end = 0
      if (obj.startTime.length === 4) {
        start = obj.startTime.slice(0, 1)
      } else {
        start = obj.startTime.slice(0, 2)
      }
      if (obj.endTime.length === 4) {
        end = obj.endTime.slice(0, 1)
      } else {
        end = obj.endTime.slice(0, 2)
      }
      let arr = []
      for (let i = Number(start); i < Number(end); i++) {
        arr.push(i.toString())
      }
      return arr
    })
    for (let i = 0; i < newArr.length; i++) {
      data[i].time = newArr[i]
    }
    return data
  }

  const filterData = (data, day, startTime) => {
    const newData = transformJson(data)
    console.log(newData)

    const filteredData = newData
      .filter(x => x.day === day)
      .filter(y =>
        y.time.includes(
          startTime.length === 4
            ? startTime.slice(0, 1)
            : startTime.slice(0, 2),
        ),
      )
    console.log(filteredData, 'filterData')
    return filteredData
  }

  return (
    <>
      <GridItem>
        <p className="time">{`${startTime} - ${endTime}`}</p>
      </GridItem>

      <GridItem>
        <Item data={filterData(data, 'monday', startTime)[0]} />
      </GridItem>
      <GridItem>
        <Item data={filterData(data, 'tuesday', startTime)[0]} />
      </GridItem>
      <GridItem>
        <Item data={filterData(data, 'wednesday', startTime)[0]} />
      </GridItem>
      <GridItem>
        <Item data={filterData(data, 'thursday', startTime)[0]} />
      </GridItem>
      <GridItem>
        <Item data={filterData(data, 'friday', startTime)[0]} />
      </GridItem>
      <GridItem>
        <Item data={filterData(data, 'saturday', startTime)[0]} />
      </GridItem>
      <GridItem>
        <Item data={filterData(data, 'sunday', startTime)[0]} />
      </GridItem>
    </>
  )
}

export default GridRow
