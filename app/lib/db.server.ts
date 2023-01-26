import { connect } from 'trilogy'

const db = connect(`${process.cwd()}/bd/file.sqlite`, {
    client: 'sql.js'
})

export const getModels = async () => {
    const Quote = await db.model('quote', {
        id: 'increments',
        quote: String,
        author: String,
    })

    return { Quote }
}