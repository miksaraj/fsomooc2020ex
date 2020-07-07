import React from 'react'

const InputField = ({ text, value, onChange }) => (
    <div>
        {text}: <input value={value} onChange={onChange} />
    </div>
)

export default InputField