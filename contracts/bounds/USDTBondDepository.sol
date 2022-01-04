pragma solidity 0.7.5;

import './BondDepository.sol';

contract USDTBondDepository is PiBondDepository {
    constructor (        
        address _PID,
        address _principle,
        address _treasury, 
        address _DAO, 
        address _bondCalculator
        ) public PiBondDepository(_PID, _principle, _treasury, _DAO, _bondCalculator) 
    {}
}