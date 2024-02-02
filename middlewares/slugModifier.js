export default (req, _res, next) => {
    if(!req.body?.title || req.body?.slug) return next()
    req.body.slug = req.body.title.toLowerCase().replaceAll(/[ '"()-\.]/gi, '_')
    next()
}