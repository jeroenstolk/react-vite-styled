import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import React from 'react'
// add day js
import dayjs from 'dayjs'

const DEFAULT_UPDATE_INTERVAL = 1000

const ClockRoot = styled(Typography)`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export interface Props {
  updateInterval?: number
}

export const Clock: React.FC<Props> = (props: Props) => {
  const { updateInterval = DEFAULT_UPDATE_INTERVAL, ...rest } = props

  const [time, setTime] = React.useState(dayjs(new Date(), 'hh:mm').format())

  setInterval(
    () => setTime(dayjs(new Date(), 'hh:mm').format()),
    updateInterval,
  )

  return (
    <ClockRoot variant="h4" {...rest}>
      {dayjs(time).format('hh:mm:ss A')}
    </ClockRoot>
  )
}

export default React.memo(Clock)
