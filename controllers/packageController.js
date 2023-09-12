const Package = require('../models/Package');

//funciona
exports.createPackage = async (req, res) => {
    try {
        const package = new Package(req.body);
        await package.save();

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.createMostrar = async (req, res) => {
    console.log('mostrar');
    res.render('create');
};
//funciona
exports.listPackages = async (req, res) => {
    console.log('listar');
    try {
        const packages = await Package.find();
        res.render('index', { packages });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.editPackage = async (req, res) => {
    try {
        const package = await Package.findById(req.params.id);

        if (!package) {
            return res.status(404).json({ error: 'Pacote de viagem não encontrado' });
        }

        res.render('package/edit', { package });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updatePackage = async (req, res) => {
    try {
        const package = await Package.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!package) {
            return res.status(404).json({ error: 'Pacote de viagem não encontrado' });
        }

        res.json(package);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deletePackage = async (req, res) => {
    try {
      const package = await Package.findById(req.params.id);
  
      if (!package) {
        return res.status(404).json({ error: 'Pacote de viagem não encontrado' });
      }
  
      await package.remove();
  
      res.json({ message: 'Pacote de viagem excluído com sucesso' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  