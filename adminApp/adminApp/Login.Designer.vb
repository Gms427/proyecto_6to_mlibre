<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class login
    Inherits System.Windows.Forms.Form

    'Form reemplaza a Dispose para limpiar la lista de componentes.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Requerido por el Diseñador de Windows Forms
    Private components As System.ComponentModel.IContainer

    'NOTA: el Diseñador de Windows Forms necesita el siguiente procedimiento
    'Se puede modificar usando el Diseñador de Windows Forms.  
    'No lo modifique con el editor de código.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.titLogin = New System.Windows.Forms.Label()
        Me.inputCorreo = New System.Windows.Forms.TextBox()
        Me.BackgroundWorker1 = New System.ComponentModel.BackgroundWorker()
        Me.inputContraseña = New System.Windows.Forms.TextBox()
        Me.btnIngresar = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'titLogin
        '
        Me.titLogin.AutoSize = True
        Me.titLogin.Location = New System.Drawing.Point(315, 74)
        Me.titLogin.Name = "titLogin"
        Me.titLogin.Size = New System.Drawing.Size(209, 13)
        Me.titLogin.TabIndex = 0
        Me.titLogin.Text = "Para seguir, ingresa tu correo y contraseña"
        '
        'inputCorreo
        '
        Me.inputCorreo.Location = New System.Drawing.Point(338, 103)
        Me.inputCorreo.MaxLength = 30
        Me.inputCorreo.Name = "inputCorreo"
        Me.inputCorreo.Size = New System.Drawing.Size(163, 20)
        Me.inputCorreo.TabIndex = 1
        Me.inputCorreo.Text = "" & Global.Microsoft.VisualBasic.ChrW(13) & Global.Microsoft.VisualBasic.ChrW(10)
        '
        'inputContraseña
        '
        Me.inputContraseña.ImeMode = System.Windows.Forms.ImeMode.NoControl
        Me.inputContraseña.Location = New System.Drawing.Point(338, 129)
        Me.inputContraseña.MaxLength = 30
        Me.inputContraseña.Name = "inputContraseña"
        Me.inputContraseña.Size = New System.Drawing.Size(163, 20)
        Me.inputContraseña.TabIndex = 2
        Me.inputContraseña.Visible = False
        '
        'btnIngresar
        '
        Me.btnIngresar.Location = New System.Drawing.Point(382, 155)
        Me.btnIngresar.Name = "btnIngresar"
        Me.btnIngresar.Size = New System.Drawing.Size(75, 23)
        Me.btnIngresar.TabIndex = 3
        Me.btnIngresar.Text = "Ingresar"
        Me.btnIngresar.UseVisualStyleBackColor = True
        '
        'login
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(800, 450)
        Me.Controls.Add(Me.btnIngresar)
        Me.Controls.Add(Me.inputContraseña)
        Me.Controls.Add(Me.inputCorreo)
        Me.Controls.Add(Me.titLogin)
        Me.Name = "login"
        Me.Text = "Login"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents titLogin As Label
    Friend WithEvents inputCorreo As TextBox
    Friend WithEvents BackgroundWorker1 As System.ComponentModel.BackgroundWorker
    Friend WithEvents inputContraseña As TextBox
    Friend WithEvents btnIngresar As Button
End Class
