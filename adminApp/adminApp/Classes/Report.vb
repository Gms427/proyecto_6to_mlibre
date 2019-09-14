Public Class Report

    Private _idProduct As Integer
    Private _idUser As Integer
    Private _description As String

    Public Sub New(idProduct As Integer, idUser As Integer, description As String)
        _idProduct = idProduct
        _idUser = idUser
        _description = description
    End Sub

    Public Property IdProduct As Integer
        Get
            Return _idProduct
        End Get
        Set(value As Integer)
            _idProduct = value
        End Set
    End Property

    Public Property IdUser As Integer
        Get
            Return _idUser
        End Get
        Set(value As Integer)
            _idUser = value
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

End Class
