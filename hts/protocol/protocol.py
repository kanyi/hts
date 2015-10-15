# (C) 2015 Elke Schaper

"""
    :synopsis: The Protocol Class.

    .. moduleauthor:: Elke Schaper <elke.schaper@isb-sib.ch>
"""

import configobj
import logging
import os
import pickle
import re

LOG = logging.getLogger(__name__)


class Protocol:

    """ ``Protocol`` describes all information connected to the protocol of a
    high throughput screen.

    Attributes:
        name (str): Name of the protocol
        preprocessing (list of str): List of preprocessing method names
        qc (list of str): List of quality control method names
        analysis (list of str): List of analysis method names


    ..todo:: Implement me :)
    """

    def __init__(self, path, name, config):

        self.path = path
        self.name = name
        # Save config simply as attributes.
        for key, value in config.items():
            if not hasattr(self, key):
                setattr(self, key, value)
        #import pdb; pdb.set_trace()

        if "qc" in config:
            qc_tmp = {}
            for i,j in self.qc.items():
                if type(j) != configobj.Section:
                    qc_tmp[i] = self.qc.pop(i)
            self.qc = {"qc_methods": self.qc}
            self.qc.update(qc_tmp)
            #for i,j in qc_tmp.items():
            #    self.qc[i] = j


    def create(path, format=None):
        """ Create ``Protocol`` instance.

        Create ``Protocol`` instance.

        Args:
            path (str): Path to input file or directory
            format (str):  Format of the input file, at current not specified


        .. todo:: Write checks for ``format`` and ``path``.
        """

        if not os.path.isfile(path):
            LOG.warning("The supplied protocol file {} does not exist.".format(path))

        if format == 'config':
            config = configobj.ConfigObj(path, stringify=True)
            path_trunk, file = os.path.split(path)
            return Protocol(path=path, name=file, config=config)
        elif format == 'pickle':
            with open(file, 'rb') as fh:
                return pickle.load(fh)
        else:
            raise Exception("Format: {} is not implemented in "
                            "Protocol.create()".format(format))


    def write(self, format, path=None, return_string=None, *args):
        """ Serialize and write ``Protocol`` instances.

        Serialize ``Protocol`` instance using the stated ``format``.

        Args:
            format (str):  The output format: Currently only "pickle".
            path (str): Path to output file

        .. todo:: Write checks for ``format`` and ``path``.
        """

        if format == 'pickle':
            with open(file, 'wb') as fh:
                pickle.dump(self, fh)
        else:
            raise Exception('Format is unknown: {}'.format(format))

        if path:
            with open(path, 'w') as fh:
                fh.write(output)
        if return_string:
            return output