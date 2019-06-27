Public Class login
    Private Sub btnIngresar_Click(sender As Object, e As EventArgs) Handles btnIngresar.Click
        Principal.ShowDialog()
        ActiveForm.Close()
    End Sub

End Class
