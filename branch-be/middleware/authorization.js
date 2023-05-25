module.exports = {
    ensureIsOwner: function(req, res, next) {
        try {
            req.user = JSON.parse(req.headers.user);
            if (req.user.role !== 'owner') {
                return res.status(403).json({ error: 'You are not authorized to perform this action.' });
            }
            next();
        } catch (err) {
            return res.status(400).json({ error: 'Invalid User Header.' });
        }
    }
};
