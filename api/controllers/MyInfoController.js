/**
 * MyInfoController
 *
 * @description :: Server-side logic for managing myinfoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function(req, res) {
        return res.view();
    },
    insert: function(req, res) {
        if (req.method == 'POST' && req.param('name', null) != null) {
            console.log('POST IN');
            MyInfo.create({ name: req.param('name') }).exec(function(err, model) {
                if (err) {

                    res.send("Error", "Sorry!Something went Wrong");
                } else {
                    console.log(model);
                    res.redirect('/myinfo/get');
                }
            });
        } else {
            res.send('Something Went Wrong');
        }
    },
    get: function(req, res) {

        MyInfo.find().exec(function(err, data) {
            return res.view({
                data: data
            });
        });
    },
    edit: function(req, res) {
        console.log(req.param('id'));
        MyInfo.findOne({ "id": req.param('id') }).exec(function(err, data) {
            console.log(data);
            return res.view({ data: data });

        });
    },
    update: function(req, res) {
        console.log('update Started');
        MyInfo.update({ id: req.param('id') }, { name: req.param('name') }).exec(function(err, data) {
            return res.redirect('/myinfo/get');
        });
    },
    delete: function(req, res) {
        console.log('update Started');
        MyInfo.destroy({ id: req.param('id') }).exec(function(err, data) {
            console.log('deleted');
            return res.redirect('/myinfo/get');
        });
    }
};