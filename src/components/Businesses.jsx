import { DownloadDoneRounded, ReduceCapacityRounded, ShuffleOnRounded, TouchAppRounded,Rotate90DegreesCwOutlined, MarkChatReadRounded, PercentRounded, DownloadDoneOutlined, MasksOutlined } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import "./styles/BusinessComponents.scss"

const HOWTO = [
    {
        text: 'Integration by API',
        subText: 'Integrate our service into your website and have full control over the checkout experience.'
    },
    {
        text: 'SDK for PHP',
        subText: 'Another great way to integrate crypto payments to your business but easier this time..'
    },
    {
        text: 'Payment by link',
        subText: 'Create a link and share it with your client to receive the payment instantly.'
    },
    {
        text: 'Static wallet',
        subText: 'Set personal payment wallet for every user.'
    },
    {
        text: 'Host2host',
        subText: 'Integrate Mushee to your business seamlessly.'
    },
    {
        text: 'White label',
        subText: 'Set your business name on a payment page.'
    },  
]

const HowTo = () => {
  return (
    <div className='HowTo'>
        <h1>How to accept crypto payments?</h1>
            <div className='AnswersWrap'>
                {
                    HOWTO.map(reply => {
                        return(
                            <div className='Answers'>
                                <h2>{reply.text}</h2>
                                <p>{reply.subText}</p>
                            </div>
                        )
                    })
                }
            </div>
    </div>
  )
}

const CHOICE = [
    {
        icon: <PercentRounded className='muiIcon'/>,
        text: 'Free processing',
        subText: 'Accept cryptocurrency payments without commissions – make your client pay it'
    },
    {
        icon: <DownloadDoneOutlined className='muiIcon'/>,
        text: 'Auto-withdrawal',
        subText: 'Set parameters needed and get your funds withdrawn automatically'
    },
    {
        icon: <MasksOutlined className='muiIcon'/>,
        text: 'Mass payouts',
        subText: 'Send assets fast to groups of people with a few clicks'
    },
    {
        icon: <Rotate90DegreesCwOutlined className='muiIcon'/>,
        text: 'Mass payouts',
        subText: 'Save your funds from volatility by converting crypto to stable coins'
    },
    {
        icon: <ShuffleOnRounded className='muiIcon'/>,
        text: 'Cross-chain',
        subText: 'We solve the cross-chain problem to prevent wrongly sent funds'
    },
    {
        icon: <MarkChatReadRounded className='muiIcon'/>,
        text: 'Mark transactions',
        subText: 'Adjust the accuracy of payments to improve your conversion'
    },
]

const Choice = () => {
    return(
        <div className='Choice'>
            <h1>Why clients choose us</h1>
            <div className='Icons'>
                <DownloadDoneRounded className='muiIcon'/>
                <TouchAppRounded className='muiIcon'/>
                <Box />
                <ReduceCapacityRounded className='muiIcon'/>
                <ShuffleOnRounded className='muiIcon'/>
            </div>
            <div className='ChoiceList'>
            {
                CHOICE.map(choice => {
                    return(
                        <div className='Choices' key={choice.text}>
                            {choice.icon}
                            <div>
                                <h2>{choice.text}</h2>
                                <p>{choice.subText}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export { HowTo, Choice }