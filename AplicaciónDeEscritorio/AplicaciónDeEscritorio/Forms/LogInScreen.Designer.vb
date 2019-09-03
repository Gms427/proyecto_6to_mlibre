<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class LogInScreen
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
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(LogInScreen))
        Me.lblLogIn = New System.Windows.Forms.Label()
        Me.tbxAddres = New System.Windows.Forms.TextBox()
        Me.btnLogIn = New System.Windows.Forms.Button()
        Me.BackgroundWorker1 = New System.ComponentModel.BackgroundWorker()
        Me.tbxPassword = New System.Windows.Forms.TextBox()
        Me.btnPrevious = New System.Windows.Forms.Button()
        Me.lblError = New System.Windows.Forms.Label()
        Me.imgNosbey = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'lblLogIn
        '
        Me.lblLogIn.AutoSize = True
        Me.lblLogIn.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.lblLogIn.Font = New System.Drawing.Font("Microsoft Sans Serif", 14.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblLogIn.ForeColor = System.Drawing.SystemColors.ControlLightLight
        Me.lblLogIn.Location = New System.Drawing.Point(477, 350)
        Me.lblLogIn.Name = "lblLogIn"
        Me.lblLogIn.Size = New System.Drawing.Size(412, 24)
        Me.lblLogIn.TabIndex = 0
        Me.lblLogIn.Text = "Para seguir, ingresa tu correo y contraseña"
        '
        'tbxAddres
        '
        Me.tbxAddres.BackColor = System.Drawing.Color.White
        Me.tbxAddres.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.tbxAddres.ForeColor = System.Drawing.SystemColors.InactiveCaption
        Me.tbxAddres.Location = New System.Drawing.Point(574, 385)
        Me.tbxAddres.MaxLength = 30
        Me.tbxAddres.Name = "tbxAddres"
        Me.tbxAddres.Size = New System.Drawing.Size(218, 24)
        Me.tbxAddres.TabIndex = 1
        Me.tbxAddres.Text = "admin@anima.edu.uy"
        '
        'btnLogIn
        '
        Me.btnLogIn.BackColor = System.Drawing.Color.FromArgb(CType(CType(82, Byte), Integer), CType(CType(148, Byte), Integer), CType(CType(226, Byte), Integer))
        Me.btnLogIn.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnLogIn.FlatAppearance.BorderSize = 0
        Me.btnLogIn.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnLogIn.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnLogIn.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.btnLogIn.Location = New System.Drawing.Point(646, 475)
        Me.btnLogIn.Name = "btnLogIn"
        Me.btnLogIn.Size = New System.Drawing.Size(75, 30)
        Me.btnLogIn.TabIndex = 3
        Me.btnLogIn.Text = "Ingresar"
        Me.btnLogIn.UseVisualStyleBackColor = False
        '
        'tbxPassword
        '
        Me.tbxPassword.BackColor = System.Drawing.Color.White
        Me.tbxPassword.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.tbxPassword.ForeColor = System.Drawing.SystemColors.InactiveCaption
        Me.tbxPassword.Location = New System.Drawing.Point(574, 425)
        Me.tbxPassword.MaxLength = 30
        Me.tbxPassword.Name = "tbxPassword"
        Me.tbxPassword.PasswordChar = Global.Microsoft.VisualBasic.ChrW(42)
        Me.tbxPassword.Size = New System.Drawing.Size(218, 24)
        Me.tbxPassword.TabIndex = 5
        Me.tbxPassword.Text = "" & Global.Microsoft.VisualBasic.ChrW(13) & Global.Microsoft.VisualBasic.ChrW(10) & "*********"
        '
        'btnPrevious
        '
        Me.btnPrevious.BackgroundImage = CType(resources.GetObject("btnPrevious.BackgroundImage"), System.Drawing.Image)
        Me.btnPrevious.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnPrevious.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnPrevious.FlatAppearance.BorderSize = 0
        Me.btnPrevious.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnPrevious.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.btnPrevious.Location = New System.Drawing.Point(1320, 15)
        Me.btnPrevious.Name = "btnPrevious"
        Me.btnPrevious.Size = New System.Drawing.Size(32, 32)
        Me.btnPrevious.TabIndex = 7
        Me.btnPrevious.UseVisualStyleBackColor = True
        '
        'lblError
        '
        Me.lblError.AutoSize = True
        Me.lblError.BackColor = System.Drawing.Color.Firebrick
        Me.lblError.Font = New System.Drawing.Font("Yu Gothic UI", 9.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblError.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.lblError.Location = New System.Drawing.Point(633, 455)
        Me.lblError.Name = "lblError"
        Me.lblError.Size = New System.Drawing.Size(100, 15)
        Me.lblError.TabIndex = 18
        Me.lblError.Text = "  Datos invalidos  "
        Me.lblError.Visible = False
        '
        'imgNosbey
        '
        Me.imgNosbey.BackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.BackgroundImage = CType(resources.GetObject("imgNosbey.BackgroundImage"), System.Drawing.Image)
        Me.imgNosbey.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.imgNosbey.Enabled = False
        Me.imgNosbey.FlatAppearance.BorderColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.imgNosbey.FlatAppearance.BorderSize = 0
        Me.imgNosbey.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.imgNosbey.Location = New System.Drawing.Point(554, 70)
        Me.imgNosbey.Name = "imgNosbey"
        Me.imgNosbey.Size = New System.Drawing.Size(259, 275)
        Me.imgNosbey.TabIndex = 31
        Me.imgNosbey.UseVisualStyleBackColor = False
        '
        'LogInScreen
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.ClientSize = New System.Drawing.Size(1366, 768)
        Me.Controls.Add(Me.imgNosbey)
        Me.Controls.Add(Me.lblError)
        Me.Controls.Add(Me.btnPrevious)
        Me.Controls.Add(Me.tbxPassword)
        Me.Controls.Add(Me.btnLogIn)
        Me.Controls.Add(Me.tbxAddres)
        Me.Controls.Add(Me.lblLogIn)
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Name = "LogInScreen"
        Me.Text = "Login"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents lblLogIn As Label
    Friend WithEvents tbxAddres As TextBox
    Friend WithEvents btnLogIn As Button
    Friend WithEvents BackgroundWorker1 As System.ComponentModel.BackgroundWorker
    Friend WithEvents tbxPassword As TextBox
    Friend WithEvents btnPrevious As Button
    Friend WithEvents lblError As Label
    Friend WithEvents imgNosbey As Button
End Class
