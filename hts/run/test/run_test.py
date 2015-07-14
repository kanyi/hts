import os
import pytest

from hts.run.run import Run
from hts.plate_layout.plate_layout import PlateLayout
from hts.protocol.protocol import Protocol

# Test file names
TEST_FOLDER_LUMINESCENCE_CSV = "luminescence_cell_viability_QC"
TEST_RUN_CONFIG = "run_config_insulin_1.txt"

notfixed = pytest.mark.notfixed

@pytest.fixture
def path_run():
    """Return the path to the test data files.
    """
    return os.path.join(os.path.abspath('.'), '../', 'test_data', 'Runs')

@pytest.fixture
def path_raw_data():
    """Return the path to the test data files.
    """
    return os.path.join(os.path.abspath('.'), '../', 'test_data', 'Raw_data')


@pytest.mark.no_external_software_required
def test_read_run_from_config_insulin(path_run):
    test_run = Run.create(origin="config",
                        path=os.path.join(path_run, TEST_RUN_CONFIG))
    assert type(test_run) == Run
    assert len(test_run.plates) == 5
    assert test_run.plates[0].height == 16
    assert test_run.height == test_run.plates[0].height
    assert test_run.plates[0].width == 24
    assert test_run.width == test_run.plates[0].width

    assert len(test_run.plates[0].raw_read_outs) == 480
    test_protocol = test_run.protocol()
    assert type(test_protocol) == Protocol
    test_plate_layout = test_run.plate_layout()
    assert type(test_plate_layout) == PlateLayout

#@notfixed
@pytest.mark.no_external_software_required
def test_read_run_from_readouts(path_raw_data):
    test_run = Run.create(origin="envision", format="csv",  dir=True,
                        path=os.path.join(path_raw_data, TEST_FOLDER_LUMINESCENCE_CSV))
    assert type(test_run) == Run
    assert len(test_run.plates) == 5
