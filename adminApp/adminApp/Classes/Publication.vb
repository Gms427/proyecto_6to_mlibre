Public Class Publication

    Private _id As Integer
    Private _name As String
    Private _description As String
    Private _price As String
    Private _currency As Integer
    Private _reports As Integer
    Private _img As String

    Public Sub New(id As Integer, name As String, description As String, price As String, currency As Integer, reports As Integer, img As String)
        _id = id
        _name = name
        _description = description
        _price = price
        _currency = currency
        _reports = reports
        _img = img
    End Sub

    Public Property Id As Integer
        Get
            Return _id
        End Get
        Set(value As Integer)
            _id = value
        End Set
    End Property

    Public Property Name As String
        Get
            Return _name
        End Get
        Set(value As String)
            _name = value
        End Set
    End Property

    Public Property Description As String
        Get
            Return _description
        End Get
        Set(value As String)
            _description = value
        End Set
    End Property

    Public Property Price As String
        Get
            Return _price
        End Get
        Set(value As String)
            _price = value
        End Set
    End Property

    Public Property Currency As Integer
        Get
            Return _currency
        End Get
        Set(value As Integer)
            _currency = value
        End Set
    End Property

    Public Property Reports As Integer
        Get
            Return _reports
        End Get
        Set(value As Integer)
            _reports = value
        End Set
    End Property

    Public Property Img As String
        Get
            Return _img
        End Get
        Set(value As String)
            _img = value
        End Set
    End Property

End Class
