IF OBJECT_ID('dbo.Employees', 'U') IS NOT NULL
DROP TABLE dbo.employees
GO
-- Create the table in the specified schema
CREATE TABLE dbo.employees
(
    EmployeeID          INT NOT NULL IDENTITY (1,1) PRIMARY KEY,
    Full_Name           [NVARCHAR](50)  NOT NULL,
    Employee_Status     [NVARCHAR](20)  NOT NULL,
    Founding_Member     BIT NOT NULL,
    Employee_Photo      [NVARCHAR](100)  NOT NULL
);
GO

INSERT INTO dbo.employees (Full_Name, Employee_Status, Founding_Member, Employee_Photo)
VALUES
    ('Superman','Active',1,'/hero/Superman.png'),
    ('Batman','Active',1,'/hero/Batman.png'), 
    ('Wonder Woman','Active',1,'/hero/WonderWoman.png'),
    ('The Flash','Active',1,'/hero/Flash.png'),
    ('Green Lantern','Active',1,'/hero/GreenLantern.png'),
    ('Aquaman','Active',1,'/hero/Aquaman.png'),
    ('Martian Manhunter','Active',1,'/hero/MartianManhunter.png'),
    ('Green Arrow','Active',0,'/hero/GreenArrow.png'),
    ('Atom','Active',0,'/hero/Atom.png'),
    ('Hawkman','Active',0,'/hero/Hawkman.png'),
    ('Black Canary','Active',0,'/hero/BlackCanary.png'),
    ('Elongated Man','Deceased',0,'/hero/ElongatedMan.png'),
    ('Red Tornado','Unknown',0,'/hero/RedTornado.png'),
    ('Hawkgirl','Active',0,'/hero/Hawkgirl.png'),
    ('Zatanna','Active',0,'/hero/Zatanna.png'),
    ('Firestorm','Active',0,'/hero/Firestorm.png');
GO